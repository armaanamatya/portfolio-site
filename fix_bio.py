with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

marker = 'data-reveal="text" style={revealDelayStyle(70)}>'
start = content.find(marker) + len(marker)
end = content.find('</p>', start) + len('</p>')

new_inner = (
    '\n'
    '            just a <span className="highlight">CS + Math senior</span> at the University of Houston tryna contribute.'
    ' went from generic Java SWE \u2192 AI/ML and never looked back. currently cooking on{\' \'}\n'
    '            <span className="highlight">CUDA</span> (my fav class rn, no cap) and reading AI papers weekly \u2014{\' \'}\n'
    '            <span className="big-red-f">F</span>ailing exams and locking in, as one does.\n'
    '          </p>'
)

new_content = content[:start] + new_inner + content[end:]

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Done!')
