import React from 'react';

const Input = ({ data, handleChange, handleSubmit }) => {
  //   const data = props.data;
  //   const handleChange = props.handleChange;
  //   const handleSubmit = props.handleSubmit;
  return (
    <div className='container form-container'>
      <form className='input-field' onSubmit={handleSubmit}>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Date:</label>
          <div className='col-sm-9'>
            <input
              className='form-control'
              type='date'
              name='date'
              value={data.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Location:</label>
          <div className='col-sm-9'>
            <input
              className='form-control'
              type='text'
              name='location'
              placeholder='Enter expense location'
              value={data.location}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Amount:</label>
          <div className='col-sm-9'>
            <input
              className='form-control'
              type='number'
              name='amount'
              placeholder='Enter an amount'
              step='0.01'
              value={data.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-3 col-form-label'>Description:</label>
          <div className='col-sm-9'>
            <input
              className='form-control'
              type='text'
              name='description'
              placeholder='Expense description'
              value={data.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-6 offset-5'>
            <button className='btn btn-success'>Add to list</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
