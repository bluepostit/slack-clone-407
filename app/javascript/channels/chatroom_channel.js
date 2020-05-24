import consumer from './consumer'

const initChatroomCable = () => {
  const messagesElement = document.getElementById('messages')

  if (messagesElement) {
    const chatroomId = messagesElement.dataset.chatroomId
    consumer.subscriptions.create(
      { channel: 'ChatroomChannel', id: chatroomId },
      {
        received(data) {
          messagesElement.insertAdjacentHTML('beforeend', data)
          window.scrollTo(0, document.body.scrollHeight)
        }
      }
    )
  }
}


export { initChatroomCable }
