const db = require('../models/db');
const { User } = db;

// Hàm thêm người dùng
exports.addUsers = async (req, res) => {
  try {
    await User.bulkCreate(
      [
        {
          name: 'Michadel Jackson Johnson',
          email: 'michaedl.johnson@example.com',
          password: 'password789',
          passwordConfirm: 'password789',
          role: 'employee',
        },
      ],
      {
        individualHooks: true, //Kích hoạt hooks để hash password
      }
    );

    res.status(201).send('Users have been added to the database!');
  } catch (error) {
    res.status(500).send('Error adding users: ' + error.message);
  }
};

// ham lay danh sach nguoi dung
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Error fetching users: ' + error.message);
  }
};

// ham xoa nguoi dung
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).send('User deleted successfully!');
  } catch (error) {
    res.status(500).send('Error deleting user: ' + error.message);
  }
};
