import Vector2 from "./vector.ts";

export type Segment = {
    p1 : Vector2;
    p2 : Vector2;
}

// returns the intersection point
// if segments not intersected returns undefined
export const intersect = (s1:Segment, s2:Segment)=>{
    const p1 = s1.p1
    const p2 = s2.p1;

    //direction of segments
    const dir1 = s1.p2.sub(s1.p1);
    const dir2 = s2.p2.sub(s2.p1);


    const rxs = dir1.cross(dir2);
    const q_p = p2.sub(p1);

    if (rxs === 0) {
        //segments are parallel or collinear
        return undefined;
    }

    const t = q_p.cross(dir2) / rxs;
    const u = q_p.cross(dir1) / rxs;

    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
        return new Vector2(p1.x + t * dir1.x, p1.y + t * dir1.y);
    }

    return undefined;
}

const SQUARE_EDGE_COUNT = 4;
export const generateSegmentInSquare = ():Segment=>{

    //returns a random vertex on the given edge of the square
    // if the index is 0 then on the top, if 1 then on the right, 2 - on the bottom, 3 on the right.
    const getPoint = (index:number)=>{
        switch (index) {
            case 0:
                return new Vector2(Math.random(), 0);
            case 1:
                return new Vector2(1, Math.random());
            case 2:
                return new Vector2(Math.random(), 1);
            case 3:
                return new Vector2(0, Math.random());
            default:
                throw new Error(`Unknown side index: ${index}`);
        }
    }

    //select random edge of square
    const index = Math.floor(Math.random() * SQUARE_EDGE_COUNT);


    //select other different edge
    const nextOffset = Math.floor(Math.random() * (SQUARE_EDGE_COUNT - 1)) + 1;
    const nextIndex = (index + nextOffset) % SQUARE_EDGE_COUNT;

    //select random points
    const p1 = getPoint(index);
    const p2 = getPoint(nextIndex);

    return {
        p1,
        p2,
    }
}