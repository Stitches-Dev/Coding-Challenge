module.exports = (sequelize, DataTypes) => {
    const Degree = sequelize.define("Degree", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        tableName: "degree",
        paranoid: false,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });

    Degree.associate = function (models) {
        Degree.hasMany(models.MajorDegree, {
            'foreignKey': 'degree_id'
        });
    };

    return Degree;
}