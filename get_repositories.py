import urllib.request, json

def get_repositories(org):
    """List all names of GitHub repositories for an org."""
    url = 'https://api.github.com/orgs/{}/repos'.format(org)
    with urllib.request.urlopen(url) as f:
        data = json.loads(f.read().decode())
    return [repo['name'] for repo in data]