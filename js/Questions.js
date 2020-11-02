class Question {
    constructor(content, answer, correctAnswer, money) {
        this.content = content;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.money = money;
    }

    checkAnswer(answer) {
        return answer === this.correctAnswer;
    }
}

function music() {
    musicBackground = new Audio("sound/bg.mp3");
}

let timeCount;
let message;

let timeID = setInterval(function () {
    document.getElementById('timeCountDown').innerHTML = timeCount + " giây";
    timeCount--;
    countdown();
}, 1000);

function countdown() {
    if (timeCount < 0) {
        clearInterval(timeID);
        message = window.confirm('HẾT GIỜ RỒI BẠN EEI!');
        reload();
    }
}

let question1 = new Question("Câu 1:Mỗi năm có 7 tháng có 31 ngày. Đố bạn có bao nhiêu tháng có  28 ngày? ", ["A.12", "B.1", "C.2", "D.7"], "A.12", "1.000.000 VNĐ");
let question2 = new Question("Câu 2:Một ly thủy tính đựng đầy nước, làm thế nào để lấy nước ở dưới đáy ly mà không đổ nước ra ngoài?", ["A.Đập đáy chai", "B.Lấy ống hút", "C.Đổ nước sang trai khác", "D.Không lấy được"], "B.Lấy ống hút", "1.500.000 VNĐ");
let question3 = new Question("Câu 3:Big Ben là tên của ...?", ["A. Một con vật", "B. Một người nổi tiếng ", "C. Một cuốn sách", "D. Một chiếc đồng hồ"], "D. Một chiếc đồng hồ", "2.000.000 VNĐ");
let question4 = new Question("Câu 4:Liên Xô tham gia chiến tranh Thế Giới thứ II vào năm nào ?", ["A. 1917", "B. 1944", "C. 1939", "D. 1941"], "D. 1941", "2.500.000 VNĐ");
let question5 = new Question("Câu 5:Pha màu đỏ với màu xanh lam ta được mà nào sau đây?", ["A. Xanh nước biển", "B. Nâu", "C. Xanh đen", "D. Tím"], "D. Tím", "5.000.000 VNĐ");
let question6 = new Question("Câu 6:Hoa hậu Thế Giới Việt Nam năm 2019 là ai?", ["A. Đỗ Mỹ Linh", "B. Lương Thùy Linh", "C. Trần Tiểu Vy", "D. Nguyễn Trần Khánh Vân "], "B. Lương Thùy Linh", "6.000.000 VNĐ");
let question7 = new Question("Câu 7:Bên trái đường có một căn nhà xanh, bên phải đường có một căn nhà đỏ.Hỏi nhà trắng ở đâu?", ["A. Ở giữa", "B. Ở phía sau ", "C. Ở nước Mỹ", "D. Không có nhà trắng"], "C. Ở nước Mỹ", "8.000.000 VNĐ");
let question8 = new Question("Câu 8:Quần đảo Trường Sa thuộc tỉnh nào ở nước ta?", ["A. Khánh Hòa", "B. Bình Thuận", "C. Đà Nẵng", "D. Bà Rịa-Vũng Tàu"], "A. Khánh Hòa", "10.000.000 VNĐ");
let question9 = new Question("Câu 9:Cầu thủ nào là vua phá lưới giải ngoại hạng Anh mùa giải 2019-2020?", ["A. Aubameyang", "B. Raheem Sterling", "C. Mohamed Salah", "D. Jamie Vardy"], "D. Jamie Vardy", "12.000.000 VNĐ");
let question10 = new Question("Câu 10:Vật liệu nào được dùng để rèn những cây kiếm Katana huyền thoại của Nhật Bản?", ["A. Takashi", "B. Tamahagane", "C. Orihaco", "D. Katanashi"], "D. Katanashi", "15.000.000 VNĐ");

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
let getQuestion = document.getElementById('question');
showQuestion(question1);

function next(index) {
    index++;
    showQuestion(questions[index]);
}

function showQuestion(question_1) {
    timeCount = 15;
    getQuestion.innerHTML = question_1.content;
    getQuestion.setAttribute("questionScreen", questions.indexOf(question_1));
    for (let i = 0; i < 4; i++) {
        let getaswId = document.getElementById('answer_' + (i + 1));
        getaswId.innerHTML = question_1.answer[i];
    }
    music();
    musicBackground.play();
}

showQuestion(question1);
let index = 0;

function checkAnswer(id) {
    console.log(index);
    let answer = document.getElementById(id).innerHTML;
    let getQuestionId = document.getElementById('question');
    if (!confirm("Bạn chắc chắn phương án này chứ?")) {
        return true;
    }
    if (questions[index].checkAnswer(answer)) {
        alert('Chúc mừng bạn đã trả lời đúng, ring tiền ^^');
        if (index === 9) {
            alert("Bạn thật xuất sắc, chúc mừng bạn đã vượt qua toàn bộ câu hỏi <3");
            timeCount = 1;
            reload();
        }
        next(index);
        index++;
        console.log(index);
        document.getElementById('result').innerHTML = "Tiền thưởng: " + (questions[index].money);
        timeCount = 15;
    } else {
        alert('Sai mất rồi! chơi lại nào :)');
        reload();
    }
}

function reload() {
    location.replace("index.html");
}



