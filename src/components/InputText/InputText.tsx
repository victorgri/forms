type Props = {
  id: string;
}

export const InputText: React.FC<Props> = ({id}) => {

  return (
    <input type="text" id={id} />
  )
}

