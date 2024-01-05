module.exports = (sequelize, DataTypes) => {
    const MajorDegree = sequelize.define("MajorDegree", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tuition: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        living_cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        visa_requirements: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        entry_requirements: {
            type: DataTypes.STRING,
            allowNull: false
        },
        intakes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        major_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        degree_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        tableName: "major_degree",
        paranoid: false,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });

    MajorDegree.associate = function (models) {
        MajorDegree.belongsTo(models.Major, {
            'foreignKey': 'major_id'
        });
        MajorDegree.belongsTo(models.Degree, {
            'foreignKey': 'degree_id'
        });
    };

    return MajorDegree;
}