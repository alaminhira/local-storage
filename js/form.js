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

const initForm = (e) => {
    // prevent the default behavior
    e.preventDefault();

    const formBtn = e.target;
    
    if (!isContains(formBtn, 'form-btn')) return;

    if (isContains(formBtn, 'btn-send')) {
        const value = getInputValue(formBtn);
        console.log(value)

    } else if (isContains(formBtn, 'btn-delete')) {
        console.log('delete')
        
    } else if (isContains(formBtn, 'btn-send-all')) {
        console.log('all')
        
    } else {
        console.log('reset')
    }
}

document.getElementById('contact-form').addEventListener('click', initForm);