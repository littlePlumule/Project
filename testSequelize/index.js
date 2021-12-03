const Sequelize = require('sequelize'); //引入Sequelize;
const sequelize = new Sequelize('mydb', 'yuhung', 'yuhung', {
    host: 'localhost',
    dialect: 'mysql'
});
const User = sequelize.define('user', { //'user' -> db名稱
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    // options
});
const Comment = sequelize.define('comment', {
    content: {
        type: Sequelize.STRING
    }
});
User.hasMany(Comment); // 單向建立關聯
Comment.belongsTo(User); // 是屬於誰的建立雙向關係

sequelize.sync().then(() => { //創建db sequelize.sync -> promise
    // User.create({ //新增db資料
    //     firstName: 'alex',
    //     lastName: 'oooooo'
    // }).then(() => {
    //     console.log('created')
    // })
    // User.findAll({ where: { firstName: 'aaaaa' } }).then(users => {//查詢全部db{{指定}}
    //     console.log(users[0].id, users[0].firstName);
    // });

    Comment.findOne({ //查詢單個db
        where: {
            content: 'hello'
        },
        include: User
    }).then(comment => {
        // user.update({ lastName: 'hahaha' }).then(() => { //修改db
        //     console.log('done')
        // })
        // user.destroy().then(() => { //刪除db
        //     console.log('done')
        // })
        console.log(JSON.stringify(comment.user.firstName, null, 4))
    })
})