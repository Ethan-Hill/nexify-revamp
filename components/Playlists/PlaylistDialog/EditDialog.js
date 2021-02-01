export default function EditDialog() {
  return (
    <sl-dialog label="Dialog" class="dialog-overview">
      <sl-form class="form-overview">
        <sl-input class="name" name="name" type="text" label="Name"></sl-input>
        <br />
        <sl-textarea
          class="description"
          name="description"
          label="Description"
        ></sl-textarea>
        <br /> <br />
        <sl-button submit>Change</sl-button>
      </sl-form>
    </sl-dialog>
  )
}
