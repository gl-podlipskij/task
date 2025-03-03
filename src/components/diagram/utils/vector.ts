class Vector {
    private readonly _x: number;
    private readonly _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    eq(other:Vector){
        return this._x === other.x && this._y === other.y;
    }
    pls(other: Vector): Vector {
        return new Vector(this._x + other.x, this._y + other.y);
    }
    sub(other: Vector): Vector {
        return new Vector(this._x - other.x, this._y - other.y);
    }
    mul(other: Vector): Vector {
        return new Vector(this._x * other.x, this._y * other.y);
    }
    sclMul(other: Vector): number {
        return this._x * other.x + this.y * other.y;
    }
    scl(sc:number): Vector {
        return new Vector(this._x * sc, this._y * sc);
    }
    cross(other:Vector): number {
        return this.x * other.y - this.y * other.x;
    }

    norm(): Vector {
        const len = this.length();
        return new Vector(this._x / len, this._y / len);
    }
    length(): number {
        return Math.hypot(this._x, this._y);
    }
    dist(other: Vector): number {
        const dx = this._x - other.x;
        const dy = this._y - other.y;

        return Math.hypot(dx, dy);
    }

    cpy():Vector {
        return new Vector(this._x, this._y);
    }


    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
export const Zero = new Vector(0, 0);


export default Vector;