console.log("lab2");

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json();

    const tbody = document.querySelector("#blogs tbody");
    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `<tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button 
                class="delete-blog"
                data-id="${blog.id}">
                Delete
                </button>
                </td>
            </tr>`

        })
    };
}

const addNewRow = (blog) => {
    const tableBody = document.querySelector("#blogs tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button 
                class="delete-blog"
                data-id="${blog.id}">
                Delete
                </button>
                </td>
            </tr>`;
    tableBody.appendChild(newRow);

    //add onclick
    const btn = document.querySelector(`[data-id='${blog.id}']`);
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        // call api to delete new blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        });
        const data = await rawResponse.json();
        //delete row 
        const row = btn.closest("tr");
        row.remove();
    })
}

const handleAddNewBlogs = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");
    const saveBlogsBtn = document.getElementById("saveBtn");

    saveBlogsBtn.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value);
        // call api to create new blog
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        addNewRow(data);
        console.log(data);
    });
}

const handleDeleteBlog = () => {
    const btns = document.querySelectorAll(".delete-blog");
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                // call api to delete new blog
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }

                });
                const data = await rawResponse.json();
                //delete row 
                const row = btn.closest("tr");
                row.remove();
            })
        })
    }
}

fetchBlogs().then(() => {
    handleDeleteBlog();
});
handleAddNewBlogs();
