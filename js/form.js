/**
 * 1. add eventListener on container
 * 2. detact the btn that was clicked
 * 3. get the value from clicked btn sibling
 * 4. on send btn click, add the adjacent input value to local storage
 * 5. on delete btn click, remove adjacent input value to local storage
 * 6. on main send btn click, add the form value as object to the local storage
 * 7. on reset btn click reset the form and clear the local storage
 */

const isContains = (el, cls) => {
    return el.classList.contains(cls);
}

const getInputValue = formBtn => {
    const input = formBtn.closest('.contact-field-btns').previousElementSibling;
    const inputValue = input.value;

    input.value = '';

    return inputValue;
}

const getInputId = formBtn => {
    const input = formBtn.closest('.contact-field-btns').previousElementSibling;
    return input.id;
}

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const sendToLocalStorage = formBtn => {
    const value = getInputValue(formBtn);
    const id = getInputId(formBtn);
    saveToLocalStorage(id, value);
}

const removeFromLocalStorage = id => {
    localStorage.removeItem(id);
}

const saveUserMessage = () => {
    const inputs = document.querySelectorAll('.form-input');
    const userInfo = {};
    inputs.forEach(input => {
        userInfo[input.id] = input.value;
        input.value = '';
    });
    saveToLocalStorage('user_message', userInfo);
}

const initForm = (e) => {
    // prevent the default behavior
    e.preventDefault();

    const formBtn = e.target;

    if (!isContains(formBtn, 'form-btn')) return;

    if (isContains(formBtn, 'btn-send')) {
        sendToLocalStorage(formBtn);

    } else if (isContains(formBtn, 'btn-delete')) {
        removeFromLocalStorage(getInputId(formBtn));

    } else if (isContains(formBtn, 'btn-send-all')) {
        saveUserMessage();

    } else {
        localStorage.clear();
    }
}

document.getElementById('contact-form').addEventListener('click', initForm);