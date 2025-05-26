import os

def clean_markdown_recursive(input_folder, output_file):
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, _, files in os.walk(input_folder):
            for filename in sorted(files):
                if filename.endswith('.md'):
                    file_path = os.path.join(root, filename)
                    relative_path = os.path.relpath(file_path, input_folder)
                    outfile.write(f"# File: {relative_path}\n\n")
                    
                    skip_block = False
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        for line in infile:
                            stripped = line.strip()

                            # Start of block to skip
                            if stripped.startswith("meta-bind-js-view") and "art" in line:
                                skip_block = True
                                continue
                            # End of the block
                            if skip_block:
                                if stripped == 'return ""; }':
                                    skip_block = False
                                continue
                            # Skip lines starting with >
                            if stripped.startswith('>'):
                                continue
                            # Keep everything else
                            outfile.write(line)
                    outfile.write('\n\n')

# ==== Set this to your campaign folder ====
input_folder = r"D:\Thellade-World\01 Campaign"
output_file = r"D:\Thellade-World\combined_canon_output.md"

clean_markdown_recursive(input_folder, output_file)
