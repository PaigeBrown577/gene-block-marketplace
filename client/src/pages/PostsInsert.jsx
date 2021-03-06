import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PostsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            price: '',
            description: '',
            meeting_location: '',
            tag: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.value
        this.setState({ price })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeInputMeetingLocation = async event => {
        const meeting_location = event.target.value
        this.setState({ meeting_location })
    }

    handleChangeTag = async event => {
        const tag = event.target.value
        this.setState({ tag })
    }

    // render() {
    //     const { id, title, price, description, meeting_location, tag} = this.state
    //     return (
    //         <Wrapper>
    //             <Title>Create Post</Title>

    //             <Label>Title: </Label>
    //             <InputText
    //                 type="text"
    //                 value={title}
    //                 onChange={this.handleChangeInputTitle}
    //             />

    //             <Label>Price: </Label>
    //             <InputText
    //                 type="number"
    //                 step="0.1"
    //                 lang="en-US"
    //                 min="0"
    //                 max="10"
    //                 pattern="[0-9]+([,\.][0-9]+)?"
    //                 value={price}
    //                 onChange={this.handleChangeInputPrice}
    //             />

    //             <Label>Description: </Label>
    //             <InputText
    //                 type="text"
    //                 value={description}
    //                 onChange={this.handleChangeInputDescription}
    //             />

    //             <Button onClick={this.handleIncludePost}>Add Post</Button>
    //             <CancelButton href={'/posts/list'}>Cancel</CancelButton>
    //         </Wrapper>
    //     )
    // }
}

export default PostsInsert
