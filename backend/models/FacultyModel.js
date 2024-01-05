module.exports = (sequelize, DataTypes) => {
    const Faculty = sequelize.define("Faculty", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        university_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        tableName: "faculty",
        paranoid: false,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });

    Faculty.associate = function (models) {
        Faculty.belongsTo(models.University, {
            'foreignKey': 'university_id'
        });
        Faculty.hasMany(models.Major, {
            'foreignKey': 'faculty_id'
        });
    };

    return Faculty;
}