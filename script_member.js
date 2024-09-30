// ฟังก์ชันสร้างการ์ด
function createMemberCards(data, sectionId, title) {
    const section = document.getElementById(sectionId);

    // สร้างหัวข้อ
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    titleContainer.innerHTML = `
        <div class="title-flex">
            <h1>${title}</h1>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=&cc=" class="member-cards small-card" target="_blank">
                Mail with CC to all ${title.toLowerCase()}
            </a>
        </div>
    `;
    section.appendChild(titleContainer);

    // สร้างการ์ดสมาชิก
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('member-cards-container');

    data.forEach(member => {
        const memberCard = document.createElement('a');
        memberCard.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`;
        memberCard.target = "_blank";
        memberCard.classList.add('member-cards');

        memberCard.innerHTML = `
            <img src="${member.avatar}" alt="avatar" class="avatar">
            <div class="info">
                <div class="details">
                    <p>${member.name}</p>
                    <p>${member.position}</p>
                </div>
                <div class="contact">
                    <p>Email: <button class="copy-btn" onclick="copyToClipboard('${member.email}')">${member.email}</button></p>
                    <p>Tel: ${member.tel}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(memberCard);
    });

    section.appendChild(cardContainer);
}

// ฟังก์ชันคัดลอกอีเมล
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        alert("Copied the email: " + text);
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
}

// ฟังก์ชันดึงข้อมูลจากไฟล์ JSON
function fetchMemberData() {
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            createMemberCards(data.Engineer, "engineer-section", "Engineer");
            createMemberCards(data.Mechanic, "mechanic-section", "Mechanic");
        })
        .catch(error => console.error('Error fetching member data:', error));
}

// เรียกฟังก์ชันเพื่อดึงข้อมูล JSON
fetchMemberData();
