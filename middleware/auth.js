export default ({ redirect}) => {

    console.log('middleware auth');

    const logeenIn = false;

    if(!logeenIn){
        return redirect('/');
    }
}

