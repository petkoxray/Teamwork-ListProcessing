(function () {
    let arr = [];
    let initialized = false;
    let index;
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

        switch (commandToken[0]){
            default:
                if (initialized) {
                    print("Error: invalid command");
                }
            }
    }

    if (!initialized) {
        arr = commandToken.slice(0);
        initialized = true;
        terminal.value += arr.join(' ') + '\n';
    }

    input.value = '';
})();
