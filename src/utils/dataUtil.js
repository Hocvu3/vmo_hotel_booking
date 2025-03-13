function normalizeArrayParam(param) {
  if (!param) return [];
  return (Array.isArray(param) ? param : [param]).map((item) =>
    typeof item === 'string' ? item.trim() : item
  );
}

function formatRoomData(rooms) {
  return rooms.map((room) => {
    const plainRoom = room.get({ plain: true });
    return {
      ...plainRoom,
      hotel: {
        ...plainRoom.hotel,
        averageRating: parseFloat(plainRoom.averageRating) || 0,
      },
    };
  });
}

module.exports = { normalizeArrayParam, formatRoomData };
