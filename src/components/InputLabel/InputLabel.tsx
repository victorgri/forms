type Props = {
  label: string;
  labelFor: string;
}

export const InputLabel: React.FC<Props> = ({label, labelFor}) => {

  return <label htmlFor={labelFor}>{label}</label>;
}
