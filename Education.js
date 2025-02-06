document.addEventListener("DOMContentLoaded", () => {
    // 1. การโต้ตอบ - คลิกปุ่มแล้วแสดงข้อความ
    const registerButton = document.querySelector(".cta-section button");
    registerButton.addEventListener("click", () => {
      alert("Thank you for registering!");
    });
  
    // 2. การตรวจสอบฟอร์ม - ตรวจสอบอีเมลและรหัสผ่าน
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
  
      if (!email.includes("@") || password.length < 6) {
        alert("Please enter a valid email and password (at least 6 characters).");
      } else {
        alert("Form submitted successfully!");
      }
    });
  
    // 3. การเพิ่มแอนิเมชัน - เอฟเฟกต์เลื่อนหรือเปลี่ยนสี
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.style.backgroundColor = "#333";
        header.style.color = "#fff";
      } else {
        header.style.backgroundColor = "#fff";
        header.style.color = "#333";
      }
    });
  
    // 4. การดึงข้อมูลจาก API - ตัวอย่างการดึงข้อมูล JSON
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("API Data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // เรียกใช้งานฟังก์ชันการดึงข้อมูล
    fetchData();
  });
  