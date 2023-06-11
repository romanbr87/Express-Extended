const importAll = (modName) => {
    this.mod = require(modName);
    Object.keys(this.mod)
          .forEach(exportedElementId => global[exportedElementId] = this.mod[exportedElementId]);
}

module.exports = importAll