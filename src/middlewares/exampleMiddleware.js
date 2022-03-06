

module.exports = (req, res, next) => {
    console.log();
    console.log(`I've passed an global middleware`);
    console.log();
    next();
}