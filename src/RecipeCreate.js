import React, { useState } from 'react'

function RecipeCreate({ createRecipe }) {
	// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
	const initialFormState = {
		name: '',
		cuisine: '',
		photo: '',
		ingredients: '',
		preparation: '',
	}

	const [formData, setFormData] = useState({ ...initialFormState })

	// TODO: Add the required submit and change handlers
	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		createRecipe(formData)
		setFormData({ ...initialFormState })
	}

	return (
		// TODO: Add the required input and textarea form elements.
		<form onSubmit={handleSubmit} name='create'>
			<table>
				<tbody className='table_row'>
					<tr>
						<td>
							<input
								name='name'
								placeholder='Name'
								type='text'
								onChange={handleChange}
								value={formData.name}
							/>
						</td>
						<td>
							<input
								name='cuisine'
								placeholder='Cuisine'
								type='text'
								onChange={handleChange}
								value={formData.cuisine}
							/>
						</td>
						<td>
							<input
								name='photo'
								placeholder='URL'
								type='text'
								onChange={handleChange}
								value={formData.photo}
							/>
						</td>
						<td>
							<textarea
								name='ingredients'
								placeholder='Ingredients'
								type='text'
								onChange={handleChange}
								value={formData.ingredients}
							/>
						</td>
						<td>
							<textarea
								name='preparation'
								placeholder='Preparation'
								type='text'
								onChange={handleChange}
								value={formData.preparation}
							/>
						</td>
						<td>
							<button type='submit'>Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	)
}

export default RecipeCreate
