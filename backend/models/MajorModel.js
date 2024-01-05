module.exports = (sequelize, DataTypes) => {
    const Major = sequelize.define("Major", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        faculty_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{
        tableName: "major",
        paranoid: false,
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });

    Major.associate = function (models) {
        Major.belongsTo(models.Faculty, {
            'foreignKey': 'faculty_id'
        });
        Major.hasMany(models.MajorDegree, {
            'foreignKey': 'major_id'
        });
    };

    return Major;
}