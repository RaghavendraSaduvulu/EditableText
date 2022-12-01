import {Component} from 'react'
import {
  EditableTextContainer,
  EditableTextContent,
  EditableTextHeading,
  EditableTextBtnWithInput,
  EditableTextPara,
  EditableTextSaveBtn,
  EditableTextInput,
  EditableTextEditBtn,
} from './StyledComponents'

class EditableText extends Component {
  state = {editMode: true, text: '', applyText: ''}

  onChangeInputText = event => {
    this.setState({text: event.target.value})
  }

  onClickEdit = () => {
    this.setState({editMode: true})
  }

  onClickSave = () => {
    const {text} = this.state
    this.setState({applyText: text, editMode: false})
  }

  render() {
    const {editMode, text, applyText} = this.state

    return (
      <EditableTextContainer>
        <EditableTextContent>
          <EditableTextHeading>Editable Text Input</EditableTextHeading>
          <EditableTextBtnWithInput>
            {editMode === true ? (
              <>
                <EditableTextInput
                  type="text"
                  value={text}
                  onChange={this.onChangeInputText}
                />
                <EditableTextSaveBtn onClick={this.onClickSave} type="button">
                  Save
                </EditableTextSaveBtn>
              </>
            ) : (
              <>
                <EditableTextPara>{applyText}</EditableTextPara>

                <EditableTextEditBtn type="button" onClick={this.onClickEdit}>
                  Edit
                </EditableTextEditBtn>
              </>
            )}
          </EditableTextBtnWithInput>
        </EditableTextContent>
      </EditableTextContainer>
    )
  }
}

export default EditableText
