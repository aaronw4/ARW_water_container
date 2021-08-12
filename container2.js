var maxArea = function(height) {
    let leftIndex = 0
    let rightIndex = height.length - 1
    area = 0

    while (leftIndex < rightIndex) {
        let contHeight = Math.min(height[leftIndex], height[rightIndex])
        let contArea = (rightIndex - leftIndex)*contHeight
        area = Math.max(contArea, area)

        if (height[leftIndex] > height[rightIndex]) {
            rightIndex--
        } else {
            leftIndex++
        }
    }

    return area
};

console.log(maxArea([2,1,3]))