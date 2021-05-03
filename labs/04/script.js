// JavaScript source code
function Run() {
    console.log(theJSON);
    var data = theJSON.data;
    //Gets the cords
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);
    //Object for box
    var boundingBox =
{
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}
    console.log("Bounding box computed for person@tamu.edu: ");
    console.log(boundingBox);
}

function findTopLeft(cord) {
    var topLeft;
    cord.forEach(
            element => {
                if (topLeft == null) {
                    topLeft = element;
                }
                else {
                    if (element.lat < topLeft.lat) {
                        if(element.lon > topLeft.lon){
                            topLeft = element;
                        }
                    }
                }
            }
        );
    return topLeft;
}
function findTopRight(cord) {
    var topRight;
    cord.forEach(
            element => {
                if (topRight == null) {
                    topRight = element;
                }
                else {
                    if (element.lat < topRight.lat) {
                        if (element.lon < topRight.lon) {
                            topRight = element;
                        }
                    }
                }
            }
        );
    return topRight;

}
function findBottomLeft(cord) {
    var bottomLeft;
    cord.forEach(
            element => {
                if (bottomLeft == null) {
                    bottomLeft = element;
                }
                else {
                    if (element.lat > bottomLeft.lat) {
                        if (element.lon > bottomLeft.lon) {
                            bottomLeft = element;
                        }
                    }
                }
            }
        );
    return bottomLeft;

}
function findBottomRight(cord) {
    var bottomRight;
    cord.forEach(
            element => {
                if (bottomRight == null) {
                    bottomRight = element;
                }
                else {
                    if (element.lat > bottomRight.lat) {
                        if (element.lon < bottomRight.lon) {
                            bottomRight = element;
                        }
                    }
                }
            }
        );
    return bottomRight;

}