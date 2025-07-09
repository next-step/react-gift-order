const getRoute = (goto: string, { id }: { id: number }): string => {
  return goto.replace(":id", String(id))
}

export default getRoute
