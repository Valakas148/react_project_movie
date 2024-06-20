import React from 'react';
import {useForm} from "react-hook-form";

const SearchMoviesComponent = () => {



    const{register,handleSubmit,reset} = useForm()


    return (
        <div>
            <input type="text" />
        </div>
    );
};

export default SearchMoviesComponent;