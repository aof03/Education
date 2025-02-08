document.addEventListener("DOMContentLoaded", () => {
  // 1. การโต้ตอบ - คลิกปุ่มแล้วแสดงข้อความ
  const registerButton = document.querySelector(".cta-section button");
  if (registerButton) {
      registerButton.addEventListener("click", () => {
          alert("Thank you for registering!");
      });
  }

  // 2. การตรวจสอบฟอร์ม - ตรวจสอบอีเมลและรหัสผ่าน
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const form = document.querySelector("form");

  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = emailInput.value.trim();
          const password = passwordInput.value.trim();

          if (!email || !password) {
              alert("Please fill in all fields.");
              return;
          }

          if (!email.includes("@") || password.length < 6) {
              alert("Please enter a valid email and password (at least 6 characters).");
              return;
          }

          alert("Form submitted successfully!");
      });
  }

  // 3. การเพิ่มแอนิเมชัน - เปลี่ยนสี Header เมื่อเลื่อนลง
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
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

