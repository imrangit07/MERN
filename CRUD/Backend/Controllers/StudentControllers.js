const StudentModels = require("../Models/StudentModels")


const SaveData = async (req, res) => {
    console.log(req.body);
    const { stuId, stuName, stuCourse, stuFees } = req.body;

    const stuData = await StudentModels.create({
        stuId,
        stuName,
        stuCourse,
        stuFees
    });
    res.send({ message: "Data Save!!!!!", stuData });
};

const StuDisplay = async (req, res) => {
    const data = await StudentModels.find();
    res.send(data);
};
const UpdateData = async (req, res) => {
    console.log(req.body);

    const { id, stuId, stuName, stuCourse, stuFees } = req.body;

    await StudentModels.findByIdAndUpdate(id, {
        stuId: stuId,
        stuName: stuName,
        stuCourse: stuCourse,
        stuFees: stuFees
    })

    const myUpdatedData = await StudentModels.find();
    res.send(myUpdatedData)
}
const StuDelete = async (req, res) => {
    const { myid } = req.query;
    console.log(myid);
    await StudentModels.findByIdAndDelete(myid);
    res.send("okkkk")

}
const EditDataShow = async (req, res) => {
    const { id } = req.query;
    // console.log(myid);
    const myData = await StudentModels.findById(id);

    res.send(myData);
}
const EditDataSave = async (req, res) => {
    const {stuCourse, stuFees, stuId,stuName,_id} = req.body;
    console.log(req.body);
    
   await StudentModels.findByIdAndUpdate(_id,{
        stuCourse, stuFees, stuId,stuName
    });

    res.send({message:"Data updated successfully!"});
}
const searchData = async (req, res) => {
    const {rno} = req.query;
    const Data = await StudentModels.find({"stuId":rno});

    res.send(Data);

}


module.exports = {
    SaveData,
    StuDisplay,
    UpdateData,
    StuDelete,
    EditDataShow,
    EditDataSave,
    searchData
}