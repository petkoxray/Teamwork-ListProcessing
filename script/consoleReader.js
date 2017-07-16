(function () {
    let terminal = $('#terminal');
    let input = $('#console');
    $('#submit').click(submit);
    
    input.keypress(
    function(e) {
        if (e.which === 13) {
            submit();
        }
    });
    
    function submit() {
        let commandToken = input.val().split(' ').filter(e => e !== '');

    }
})();