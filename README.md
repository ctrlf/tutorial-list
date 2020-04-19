# tutorial-list [![Build Status](https://dev.azure.com/jan0575/CTRL-F%20Tutorial%20Lists/_apis/build/status/ctrlf.tutorial-list?branchName=master)](https://dev.azure.com/jan0575/CTRL-F%20Tutorial%20Lists/_build/latest?definitionId=3&branchName=master)

Additional resources for ctrl-f.dev. If you have additional links for this list, please first check on ctrl-f.dev if they are already indexed.

## Contributing

If not, follow these steps:

- Fork this repository
- Create a new branch: `git checkout -b branch_name`
- Add your links to the appropriate json file
- Make a commit `git add . && git commit`
- Push your branch
- Create a Pull Request

### What if there's no matching file?

That's no problem! Create a new json file and paste in this:

```json
{
  "topic": "",
  "is_programming_language": false,
  "links": [
  ]
}
```

Explanation:

- `topic`: The name of the programming language or topic you'd like to add content for (`javascript` or `compilers` for example)
- `is_programming_language`: Are the links about a specific language like CSS, JavaScript or Ruby? If so, set this to `true` otherwise `false`
- `links`: Add your links here as strings (example: `"https://example.com/tutorial"`)