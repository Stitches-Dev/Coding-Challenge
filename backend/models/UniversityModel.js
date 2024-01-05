module.exports = (sequelize, DataTypes) => {
    const University = sequelize.define("University", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cover_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        languages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        application_deadline: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        accepting_applications: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    },{
        tableName: "university",
        paranoid: false,
        freezeTableName: true,
        createdAt: true,
        updatedAt: true,
    });

    University.associate = function (models) {
        University.hasMany(models.Faculty, {
            'foreignKey': 'university_id'
        });
    }

    return University;
}