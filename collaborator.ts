function collaborators_map(json: any): Map<string, Set<string>> {
  return new Map(Object.entries(json));
}