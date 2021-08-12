var maxArea = function(height) {
    if (height.length === 2) {
        return waterArea(0, 1)
    }

    let area = 0

    for (i=0; i < height.length - 1; i++) {
        for (j=1; j < height.length; j++) {
            tempArea = waterArea(i, j)
            if (tempArea > area) {
                area = tempArea
            }
        }
    }

    return area

    function waterArea(i, j) {
        if (height[i] > height[j]) {
           return (j-i)*height[j]
        } else {
            return (j-i)*height[i]
        }
    }
};

console.log(maxArea([2,1,3]))