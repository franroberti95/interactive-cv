import React, {useEffect, useRef} from 'react';

type direction = 'left' | 'right' | 'up' | 'down';

enum DIRECTIONS {
    right = 'right',
    up = 'up',
    down = 'down',
    left = 'left'
}

interface Coordinate {
    x: number,
    y: number
}

const directionsArray: direction[] = [DIRECTIONS.up,DIRECTIONS.right,DIRECTIONS.down,DIRECTIONS.left];

const getRandomDirection = () => {
    const index = Math.floor(Math.random() * directionsArray.length);
    return directionsArray[index];
}

const getNextDirection = (currentDirection: direction) => {
    const currentIndex = directionsArray.indexOf(currentDirection);
    if(currentIndex >= directionsArray.length-1){
        return directionsArray[0]
    }
    return directionsArray[currentIndex+1]
}

const MAX_TURTLE_SIZE_X = 25;
const MAX_TURTLE_SIZE_Y = 25;
const MIN_TURTLE_SIZE_X = 15;
const MIN_TURTLE_SIZE_Y = 15;

class Turtle {
    position = {
        x: 0,
        y: 0
    }
    direction: direction = getRandomDirection();

    boxSizeX: number = 10;
    boxSizeY: number = 10;

    moveLen = 10;
    speed = 100;

    collided = false;

    rightBoundary = 100;
    leftBoundary = -100;
    upBoundary = 100;
    downBoundary = -100;

    constructor(
        center: Coordinate,
        leftBoundary: number,
        rightBoundary: number,
        upBoundary: number,
        downBoundary: number,
        sizeX: number,
        sizeY: number
    ) {
        this.position= center;
        this.rightBoundary = rightBoundary;
        this.leftBoundary = leftBoundary;
        this.upBoundary = upBoundary;
        this.downBoundary = downBoundary;

        this.boxSizeX = sizeX;
        this.boxSizeY = sizeY;

        const moveInterval = setInterval(()=>{

            if(this.collided)
                clearInterval(moveInterval);

            this.move();

        }, this.speed)
    }

    changeDirection(){
        this.direction = getNextDirection(this.direction);
    }

    move(){
        switch(this.direction){
            case DIRECTIONS.down:
                this.position.y+=this.moveLen;
                break;
            case DIRECTIONS.up:
                this.position.y-=this.moveLen;
                break;
            case DIRECTIONS.left:
                this.position.x-=this.moveLen;
                break;
            case DIRECTIONS.right:
                this.position.x+=this.moveLen;
        }
        if(this.hasCollided()){
            this.collided = true;
        }
    }

    hasCollided(){
        return this.position.x >= this.rightBoundary || this.position.x <= this.leftBoundary || this.position.y >= this.upBoundary || this.position.y <= this.downBoundary;
    }

    checkCollisionWithOtherTurtles(otherTurtles: Turtle[], currentIndex: number){
        if (otherTurtles.some(
            (t, index) =>
                index !== currentIndex &&
                (t.position.x - (t.boxSizeX/2)) < (this.position.x + (this.boxSizeX/2)) && (t.position.x + (t.boxSizeX/2)) > (this.position.x - (this.boxSizeX/2)) &&
                (t.position.y - (t.boxSizeY/2)) < (this.position.y + (this.boxSizeY/2)) && (t.position.y + (t.boxSizeY/2)) > (this.position.y - (this.boxSizeY/2))
        )){
            this.collided = true;
            return true;
        }
        return false
    }
}
const getRandomNumber = (from: number, to: number) => Math.floor(Math.random() * (to - from + 1) + from);

const getRandomSignedNumber = (num: number) => {
    const sign = Math.round(Math.random()) * 2 - 1;
    return (getRandomNumber(0,num) * sign);
}

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const generateRandomCenter = (items, center, offset) => {
    const startX = center.x + getRandomSignedNumber(offset.x);
    const startY = center.y + getRandomSignedNumber(offset.y);
    if(collidesWithOtherItem({x: startX, y: startY}, items))
        return generateRandomCenter(items, center, offset);
    return {x: startX, y: startY};
}

const collidesWithOtherItem = ({x, y}: Coordinate, items: Turtle[]) =>
    items.some( i => (Math.abs(i.position.x-x) < i.boxSizeX) && (Math.abs(i.position.y-y) < i.boxSizeY) )

const generateRandomTurtles = (quantity: number, center: Coordinate, offset: Coordinate) => {
    const generatedItems: Turtle[] = [];
    return new Array(quantity).fill(undefined).map( () => {
        const generatedSizeX = getRandomNumber(MIN_TURTLE_SIZE_X, MAX_TURTLE_SIZE_X);
        const generatedSizeY = getRandomNumber(MIN_TURTLE_SIZE_Y, MAX_TURTLE_SIZE_Y);
        const generatedCenter = generateRandomCenter(generatedItems, center, offset);
        const turtle = new Turtle(generatedCenter, 0, windowWidth, windowHeight, -windowHeight, generatedSizeX, generatedSizeY);
        generatedItems.push(turtle);
        return turtle
    })
}

const Game = () => {
    const canvasRef: {current: HTMLCanvasElement} | null = useRef();
    const turtlesArray = [];

    const draw = () => {
        if(!canvasRef?.current) return;

        const ctx = canvasRef?.current?.getContext("2d");

        ctx.fillStyle = "white";
        ctx.fillRect(0, 0,  canvasRef?.current?.width,
            canvasRef?.current?.height);
        ctx.fillStyle = "green";
        ctx.beginPath();
        let turtlesWithoutCollisionQuantity = 0;
        turtlesArray.forEach( (t: Turtle, currentIndex) => {
            //ctx.arc(t.x, t.y, 20, 0, 2 * Math.PI);
            ctx.font = `${t.boxSizeY}px Verdana`;
            ctx.fillText("🐢", t.position.x, t.position.y);
            //ctx.rect(t.position.x-(t.boxSizeX/2), t.position.y-(t.boxSizeY/2), t.boxSizeX, t.boxSizeY)
            t.checkCollisionWithOtherTurtles(turtlesArray, currentIndex);
            if(!t.collided) turtlesWithoutCollisionQuantity+=1;
        })
        ctx.font = `20px Verdana`;
        ctx.fillText( `Turtles safe: ${turtlesWithoutCollisionQuantity}`, 25, 25);

        ctx.fill();
        ctx.stroke();
    };

    useEffect( () => {
        if(canvasRef?.current)
            canvasRef.current.addEventListener('click', handleCanvasClick, false);

        setInterval(() => {
            draw();
        }, 1000 / 60);

        setInterval(()=>{
            turtlesArray.push(...generateRandomTurtles(getRandomNumber(1,2), { x: windowWidth/2, y: windowHeight/2} , {x: 55,y: 55}));
        }, 5000)
    })

    const handleCanvasClick = (event) => {
        const mouse = oMousePos(event)
        turtlesArray.forEach( turtle => {
            const elementTop = turtle.position.y;
            const elementLeft = turtle.position.x;
            const elementHeight = 30;
            const elementWidth = 30;
            const x = mouse.x - elementLeft,
                y = mouse.y - elementTop;

            // Collision detection between clicked offset and element.
            if (Math.abs(y) < elementHeight && Math.abs(x) < elementWidth) {
                //Clicked turtle, change direction
                turtle.changeDirection();
            }
        })
    }
    const oMousePos = (evt) => {
        if(!canvasRef?.current) return;
        const ClientRect = canvasRef?.current?.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - ClientRect.left),
            y: Math.round(evt.clientY - ClientRect.top)
        }
    }

    return <div>
        <canvas ref={canvasRef} width={windowWidth} height={windowHeight} />
    </div>
}

export default Game;