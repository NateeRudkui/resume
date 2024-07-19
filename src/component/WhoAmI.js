import "../style/WhoAmI.css";

const WhoAmI = () => {
  return (
    <div className="flex w-auto h-screen px-[5rem] py-[5rem] bg-[#252625]">
      <div className="basis-1/2 relative flex justify-center ">
        <div className="frame"></div>
        <div className="slide w-full h-full flex justify-center items-center">
          <img src="images/NT_2.png" className="w-auto h-[90%]" />
        </div>
      </div>
      <div className="aboutme-text basis-1/2 w-[700px] h-auto items-center">
        <h1>Who Am I</h1>
        <p className="text-[20px]">
          {" "}
          สวัสดีครับผมชื่อ นายนที รัดคุ่ย ชื่อเล่นชื่อที
          ขณะนี้กำลังศึกษาในสาขาวิศวกรรมคอมพิวเตอร์
          มีความชอบและสนใจในด้านเทตโนโลยีอย่างมากจึงอยากทำงานด้านเทคโนโลยีต่าง
          งานอดิเรกที่ชอบคือ อ่านหนังสือ ดูหนัง ฟังเพลง เล่นเกม และ ออกกำลังกาย
          สีที่ชอบคือสีแดง รักสัตว์ รักเด็ก เป้าหมายในอนาคตตอนนี้อยากได้ภาษาที่
          2 อยากเป็น Full Stack Developer เป้าหมายสูงสุดคืออยากให้สบาย
          เคยทำงานด้าน Produced Developer และ Network มา
          หวังอย่างยิ่งว่าจะได้ความรู้และประสบการณ์เพิ่มจากงานที่ทำ ข้อดี
          เป็นคนใจเย็นและพร้อมเปิดรับความรู้ใหม่ๆเสมอ ข้อเสีย
          ชอบถามเยอะแต่ถ้าเข้าใจจะเข้าใจจริงๆ
        </p>
      </div>
    </div>
  );
};

export default WhoAmI;
