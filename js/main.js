$(function(){
    $('.load-more').on('click', ()=>{
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html',
            type: 'GET',    
            beforeSend: ()=>{
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: (res)=>{
                setTimeout(()=>{
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    console.log(res);
                },1000)
            },
            error: ()=>{
                alert('error!');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    })
})