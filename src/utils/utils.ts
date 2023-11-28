export function format(first: string, middle: string, last: string): string {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function scrollToElement(id, offset = 20, duration = 800) {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document.getElementById(id).getBoundingClientRect();
    const position = elemRect.top - bodyRect.top - offset;

    scrollToY(position, duration);
}

export function scrollToY(postionY, duration = 800) {
    const startingY = window.scrollY;
    const diff = postionY - startingY;
    let start;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) {
            start = timestamp;
        }

        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
}
