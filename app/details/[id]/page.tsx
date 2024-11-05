async function Details({ params }: { params: { id: string } }) {
  const { id } = await params
  return (
    <div>Detail {id}</div>
  )
}

export default Details