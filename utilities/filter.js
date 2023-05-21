const filterNotices = ({type, _id, category, search , age , gender}) => {
    // console.log(_id, category, search, age, gender);
    const conditions = {};
    if (_id) {
    // conditions.$and = [
    //     { owner: _id },
    //     { favorite: { $in: [_id] } }
    // ];
    if (type === 'owner') conditions.owner = _id ;
    if (type === 'favorite') conditions.favorite = { $in: [_id] };
    };
    if (category) {
        conditions.category = {
            category: decodeURIComponent(category),
          };
        }

      if (search) {
        conditions.$or = [
          { title: { $regex: new RegExp(decodeURIComponent(search), "i") } },
          { name: { $regex: new RegExp(decodeURIComponent(search), "i") } },
          { breed: { $regex: new RegExp(decodeURIComponent(search), "i") } },
          { comments: { $regex: new RegExp(decodeURIComponent(search), "i") } },
        ];
      }
      
      if (age) {
        const today = new Date();
    
        if (age === "1") {
          conditions.birthday = {
            $gte: new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()).toLocaleDateString("ru-RU"),
            $lt: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()).toLocaleDateString("ru-RU"),
          };
        } else if (age === "2") {
          conditions.birthday = {
            $gte: new Date(today.getFullYear() - 3, today.getMonth(), today.getDate()).toLocaleDateString("ru-RU"),
            $lt: new Date(today.getFullYear() - 2, today.getMonth(), today.getDate()).toLocaleDateString("ru-RU"),
          };
        } else if (age === "3-12") {
          conditions.birthday = {
            $gte: new Date(today.getFullYear(), today.getMonth() - 12, today.getDate()).toLocaleDateString("ru-RU"),
            $lt: new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()).toLocaleDateString("ru-RU"),
          };
        }
      }
      if (gender) {
        console.log('sex');
        conditions.sex = gender;
      }
      return conditions;
};

module.exports = filterNotices;    