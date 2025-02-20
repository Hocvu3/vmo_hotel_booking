const User = require('./user.model');
const Room = require('./room.model');
const Hotel = require('./hotel.model');
const Image = require('./image.model');
const Price = require('./price.model');
const Review = require('./review.model');
const Salary = require('./salary.model');
const Booking = require('./booking.model');
const Service = require('./service.model');
const Payment = require('./payment.model');
const Category = require('./category.model');
const Currency = require('./currency.model');
const Discount = require('./discount.model');
const Booking_Service = require('./booking_service.model');
const Booking_Discount = require('./booking_discount.model');

const defineAssociations = () => {
  //user
  User.hasMany(Booking, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  Booking.belongsTo(User, { foreignKey: 'user_id' });

  User.hasOne(Salary, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  Salary.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User);

  //room
  Room.hasMany(Booking, { foreignKey: 'room_id', onDelete: 'CASCADE' });
  Booking.belongsTo(Room, { foreignKey: 'room_id' });

  Hotel.hasMany(Room, { foreignKey: 'hotel_id', onDelete: 'CASCADE' });
  Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });

  Room.hasMany(Image);
  Image.belongsTo(Room);

  Category.hasMany(Room);
  Room.belongsTo(Category);

  Room.hasOne(Price);
  Price.belongsTo(Room);

  //service
  Service.hasMany(Image);
  Image.belongsTo(Service);

  Service.hasMany(Price);
  Price.belongsTo(Service);

  Service.hasMany(Booking_Service);
  Booking_Service.belongsTo(Service);

  //discount
  Discount.hasMany(Booking_Discount);
  Booking_Discount.belongsTo(Discount);

  //booking
  Booking.hasMany(Booking_Discount), Booking_Discount.belongsTo(Booking);

  Booking.hasMany(Booking_Service);
  Booking_Service.belongsTo(Booking);

  //payment
  Payment.hasOne(Booking, { onDelete: 'CASCADE' });
  Booking.belongsTo(Payment);

  Payment.hasOne(Currency);
  Currency.belongsTo(Payment);
};

module.exports = defineAssociations;
