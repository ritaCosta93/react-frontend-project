import React, {useEffect, useState} from 'react'
import './UpdatePlace.css'
import {useParams} from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators'

import {useForm} from '../../shared/hooks/form-hook'

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UpdatePlace = () => {
    const [isLoading,setIsLoading] = useState(true);
    const placeId = useParams().placeId;

    const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs); // send this to the backend!
    };

 

    const identifiedPlace = DUMMY_PLACES.find( p => p.id === placeId );

    const [formState,inputHandler,setFormData] = useForm({
      title:{
        value:identifiedPlace.title,
        isValid:true
      },
      description:{
        value:identifiedPlace.description,
        isValid:true
      }
  },true)

    useEffect(() => {
      setFormData({
        title:{
          value:identifiedPlace.title,
          isValid:true
        },
        description:{
          value:identifiedPlace.description,
          isValid:true
        }
      },true);
      setIsLoading(false);
    },[setFormData,identifiedPlace])

    

    

    if(!identifiedPlace){
        return (
        <div className="center">
            <h2>Could not find place!</h2>
        </div>
        );
    }

    if(isLoading){
      return (
        <div className="center">
            <h2>Loading</h2>
        </div>
      )
    }

    return (
      formState.inputs.title.value && <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(3)]} errorText="Please enter a valid title" onInput={inputHandler} value={formState.inputs.title.value} valid={formState.inputs.title.isValid}/>
            <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid description (at least 5 characters)" onInput={inputHandler} value={formState.inputs.description.value} valid={formState.inputs.description.isValid}/>
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button> 
        </form>
      
    )
}

export default UpdatePlace
