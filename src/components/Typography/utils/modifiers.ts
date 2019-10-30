export interface ModifierProps {
  color: 'reverse' | 'secondary' | 'muted';
  bold: boolean;
  noPadding: boolean;
  noPaddingBottom: boolean;
  noPaddingTop: boolean;
}

export const modifiers = (props: ModifierProps) => {
  return {
    color: props.color,
    fontWeight: props.bold ? 'bold' : 'body',
    ...(props.noPadding ? { padding: 0 } : {}),
    ...(props.noPaddingBottom ? { paddingB: 0 } : {}),
    ...(props.noPaddingTop ? { paddingT: 0 } : {}),
  };
};
