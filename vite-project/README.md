# Config:

`npm create vite@latest`
`cd vite-project`
`npm install`
`npm run dev`

# Component là gì

- là 1 phần UI có thể nhỏ như các button, hoặc là lớn như 1 Page
- những đoạn code muốn tái sử dụng -> component
- rafce -> tạo nhanh 1 func component

# Lý thuyết Cú pháp JSX trong React

- JSX là 1 phần mở rộng cú pháp cho JavaScript. Giúp chúng ta có thể viết các đoạn code markup giống như HTML ở trong 1 file JavaScript
- fragment: <> </>

# Truyền dữ liệu vào component bằng props:

- prop (property - thuộc tính)
- truyền data từ component cha vào component con

# 10 Lý do không nên dùng index làm key

- không dùng index làm key khi web có filter, sort

# Xử lý sự kiện trong React

- Event handler - xử lý sự kiện

# 12 Hooks là gì ?

- Hook là 1 function JavaScript Tên của hook sẽ bắt đầu bằng chữ "use".

* Ví dụ: useState, useRef,....

- Có thể sử dụng các Hooks có sẵn trong React như
  •useState
  •useEffect
  •use Reducer
  •useRef
  ....
- Hoặc tự xây dựng các custom hook bằng cách kết hợp các hooks có sẵn của React

**1. Chỉ gọi hooks ở top-level của component**
_Không gọi Hooks ở trong vòng lặp, câu điều kiện, hay trong các function lồng nhau, hoặc các block code try / catch/ finally_

- Chỉ gọi hooks tại top-level của 1 function component
- Chỉ gọi hooks top-level của 1 custom hook

**2. Chỉ gọi hooks từ React functions**

- Chỉ gọi hooks từ React function components
- Chỉ gọi hooks từ các custom hooks khác

# useState:

1. State có thể giữ lại dữ liệu giữa các lần component re-render
2. Hàm setter cập nhật lại State sẽ trigger React re-render lại component
