import React from 'react'
import FormField from '../../../styles/FormField.js'
import Label from '../../../styles/Label.js'
import Input from '../../../styles/Input.js'

function SearchForm({search, setSearch}) {
    

    return (
        <form>
                <FormField>
                    <Label htmlFor="search">Search</Label>
                    <Input
                    type="text"
                    id="search"
                    autoComplete="off"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    />
                </FormField>
            </form>
    )
}

export default SearchForm
